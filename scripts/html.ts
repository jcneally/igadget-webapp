# HTML Transformations go here

$("/html") {
  add_canonical_tag()
  rewrite_links()

  # Add the mobile meta tags
  clean_mobile_meta_tags()

  # Remove styles and comments
  remove_html_comments()

  absolutize()
  rewrite_aspnet_scripts()
  clean_mobile_meta_tags()
  remove_all_styles()

  add_assets()

  @import "optimize.ts"
  @import "sections/header.ts"
  @import "sections/footer.ts"

  @import "mappings.ts"

}
