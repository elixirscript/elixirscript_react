defmodule ElixirScriptReact.Mixfile do
  use Mix.Project

  def project do
    [
      app: :elixir_script_react,
      version: "1.0.0-react.15.6.1",
      elixir: "~> 1.5",
      start_permanent: Mix.env == :prod,
      deps: deps()
    ]
  end

  def application do
    [
      extra_applications: [:logger]
    ]
  end

  defp deps do
    [
      {:elixir_script, git: "git@github.com:elixirscript/elixirscript.git"},
    ]
  end
end
