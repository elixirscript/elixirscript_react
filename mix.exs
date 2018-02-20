defmodule ElixirScriptReact.Mixfile do
  use Mix.Project

  def project do
    [
      app: :elixir_script_react,
      version: "16.2.0",
      elixir: "~> 1.6",
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
      {:elixir_script, "~> 0.32"},
      {:ex_doc, "~> 0.18", only: :dev}
    ]
  end

  defp description do
    """
    React library for ElixirScript
    """
  end

  defp package do
    [
      files: ["lib", "priv/**/*.*", "mix.exs", "README.md", "CHANGELOG.md"],
      maintainers: ["Bryan Joseph"],
      licenses: ["BSD-3"],
      links: %{
        "GitHub" => "https://github.com/elixirscript/elixirscript_react"
      },
      build_tools: ["mix"]
    ]
  end
end
