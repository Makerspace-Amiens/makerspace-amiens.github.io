source "https://rubygems.org"
ruby RUBY_VERSION

# This will help ensure the proper Jekyll version is running.
gem "jekyll", "3.9.0"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Theme Bulma Clean
gem "bulma-clean-theme"

# gem kramdown
gem "kramdown-parser-gfm"

group :jekyll_plugins do
    gem "jekyll-feed", "~> 0.6"
    gem "jekyll-sitemap"
    gem "jekyll-paginate"
    gem "jekyll-seo-tag"
    gem "jekyll-tagories"
    gem 'jekyll-spaceship'
    gem "jekyll-pdf-embed"
    gem 'wdm', '~> 0.1.1', :install_if => Gem.win_platform?
    gem "jekyll-linkpreview"
    gem 'jekyll-remote-include', :github => 'UriShX/jekyll-remote-include', :branch => 'context-variables'
end
gem "webrick", "~> 1.8"
