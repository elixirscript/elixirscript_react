# ElixirScriptReact

A library for using [React](https://facebook.github.io/react/) with ElixirScript

## Example

```elixir
  use React.HTML

  def my_section()
    section id: "todoapp" do
      header id: "header" do
        h1 do
          "todos"
        end
        input [
          id: "new-todo",
          placeholder: "What needs to be done?",
          autoFocus: true,
          onKeyPress: fn(event, _) -> process_event(event) end
        ]
      end
    end
  end

  ReactDOM.render(my_section(), "my_dom_container_query")
```

`my_dom_container_query` is a string that is passed to `document.querySelector` in the browser

## Installation

If [available in Hex](https://hex.pm/docs/publish), the package can be installed
by adding `elixir_script_react` to your list of dependencies in `mix.exs`:

```elixir
def deps do
  [
    {:elixir_script_react, "~> x.x"}
  ]
end
```

Documentation can be generated with [ExDoc](https://github.com/elixir-lang/ex_doc)
and published on [HexDocs](https://hexdocs.pm). Once published, the docs can
be found at [https://hexdocs.pm/elixir_script_react](https://hexdocs.pm/elixir_script_react).

