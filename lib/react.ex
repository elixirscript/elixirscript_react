defmodule React do
  use ElixirScript.FFI

  foreign createElement(type, props, children)
end
