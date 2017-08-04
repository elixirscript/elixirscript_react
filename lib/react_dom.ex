defmodule ReactDOM do
  use ElixirScript.FFI

  defexternal render(element, container)
end
