defmodule ElixirScriptReact.Mixfile do
  use Mix.Project

  def project do
    [
      app: :elixir_script_react,
      version: "1.0.0-react.15.6.1",
      elixir: "~> 1.5",
      start_permanent: Mix.env == :prod,
      deps: deps(),
      package: package(),
      description: description()
    ]
  end

  def application do
    [
      extra_applications: [:logger]
    ]
  end

  defp deps do
    [
      {:elixir_script, "~> 0.30"},
    ]
  end

  defp description do
    """
    React Library for ElixirScript
    """
  end

  defp package do
    [
      files: ["lib", "priv/**/*.*", "mix.exs", "README.md", "LICENSE", "CHANGELOG.md"],
      maintainers: ["Bryan Joseph"],
      licenses: ["MIT"],
      links: %{
        "GitHub" => "https://github.com/elixirscript/elixirscript_react"
      },
      build_tools: ["mix"]
    ]
  end
end
