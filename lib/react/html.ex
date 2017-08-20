defmodule React.HTML do
  @moduledoc """
  Defines macros for creating React HTML elements.
  """

  defmacro __using__(_) do
    quote do
      import React.HTML
    end
  end

  @external_resource tags_path = Path.join([__DIR__, "tags.txt"])

  @tags (for line <- File.stream!(tags_path, [], :line) do
    line |> String.trim |> String.to_atom
  end)

  for tag <- @tags do
    @doc """
    Defines a macro for the html element, #{tag}
    """
    defmacro unquote(tag)(attrs, do: inner) do
      tag = Atom.to_string(unquote(tag))
      { inner, attributes } = do_tag(inner, attrs)

      quote do
        React.createElement(unquote(tag), unquote(attributes), unquote(inner))
      end
    end

    defmacro unquote(tag)(attrs \\ []) do
      tag = Atom.to_string(unquote(tag))

      { inner, attributes } = Keyword.pop(attrs, :do)
      { inner, attributes } = do_tag(inner, attributes)

      quote do
        React.createElement(unquote(tag), unquote(attributes), unquote(inner))
      end
    end
  end

  defp do_tag(inner, attributes) do
    inner = case inner do
      {:__block__, _, params} ->
        params
      nil ->
        []
      x ->
        [x]
    end

    attributes = config_to_map(attributes)

    {inner, attributes}
  end

  defp config_to_map(config) do
    config = Enum.map(config, fn({key, value}) ->
    if is_atom(key) do
      {Atom.to_string(key), value}
    else
      {key, value}
    end
    end)

    {:%{}, [], config}
  end

end
