defmodule React do
  @moduledoc """
  FFI Module for interacting with the [React](https://facebook.github.io/react/)
  JavaScript module.
  """
  use ElixirScript.FFI

  @doc """
  Creates a React Element

  ```elixir
  props = %{"hello" => world}
  children = []

  React.createElement("div", props, children)
  ```
  """
  defexternal createElement(type, props, children)
end
