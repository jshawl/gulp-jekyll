debug = :true
css_dir = "src/css"
sass_dir = "src/scss"

require 'autoprefixer-rails'
require 'csso'

on_stylesheet_saved do |file|
  css = File.read(file)
  File.open(file,'w') do |io|
    if debug == :true
      io << AutoprefixerRails.compile(css)
    else
      io << Csso.optimize(AutoprefixerRails.compile(css))
    end
  end
end
