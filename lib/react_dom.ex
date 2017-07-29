defmodule ReactDOM do
  use ElixirScript.FFI

  foreign render(element, container)
end
