# switches the add-to-cart links to buttons
@func XMLNode.switch_cart_links() {
  $(".//div[contains(@class, 'ProductActionAdd')]") {
	$("./a"){
		$text = text()
		text("")
		match($text) {
			with(/Add To Cart/) {
				insert("div", class: "sprites-AddCartButton")
			}
			with(/Choose Options/) {
				insert("div", class: "sprites-ChooseOptions")
			}
		}
	}
  }
}

# cleans up the page by removing some elements
@func XMLNode.cleanup() {
	# remove new products pane
	remove("//div[contains(@class, 'NewProducts')]")

	# remove newsletter pane
	remove("//div[contains(@class, 'NewsletterSubscription')]")

	# remove breadcrumbs 
	remove("//div[contains(@class, 'Breadcrumb')]")

	# remove sharing links if possible
	remove("//div[contains(@class, 'AddThisButtonBox')]")

	remove("//a[@id='ImageScrollNext']")
}

@func XMLNode.carousel() {
	attribute("data-ur-set", "carousel")
			attribute("data-ur-infinite", "disabled")

			inner_wrap("div", data-ur-carousel-component: "scroll_container")

			$(".//li") {
				attribute("data-ur-carousel-component", "item")
				add_class("mw-carousel-item")
			}
}