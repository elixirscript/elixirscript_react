defmodule React do
  @moduledoc """
  FFI Module for interacting with the React
  JavaScript module.
  """
  use ElixirScript.FFI

  @doc """
  Creates a React Element

  ```elixir
  props = ElixirScript.JS.map_to_object(%{"hello" => world})
  children = []

  React.createElement("div", props, children)
  ```
  """
  defexternal createElement(type, props, children)
end
