defmodule React do
  use ElixirScript.FFI

  defexternal createElement(type, props, children)
end
