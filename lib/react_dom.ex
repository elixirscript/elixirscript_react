defmodule ReactDOM do
  @moduledoc """
  FFI Module for interacting with the ReactDOM
  JavaScript module.
  """
  use ElixirScript.FFI


  @doc """
  Renders a React Element to the given DOM container

  ```elixir
  ReactDOM.render(my_react_element, "#my_container")
  ```

  Container is any value allowed by [document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
  """
  defexternal render(element, container)
end
