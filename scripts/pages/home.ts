# Place holder/example file
$$("body") {
	# Adding a class for page-specific styling
	add_class("_home")

	# Remove some content from homepage
	remove(".//div[contains(@class, 'BrandList')]")
	remove(".//div[contains(@class, 'NewsletterSubscription')]")
	remove(".//span[contains(@class, 'FeedLink')]")
	remove(".//div[contains(@class, 'TopSellers')]")
	remove("(.//div[contains(@class, 'NewProducts')])[2]")
	remove(".//div[contains(@class, 'PopularProducts')]")

	remove(".//div[contains(@class, 'QuickViewBtn')]")
	remove(".//div[contains(@class, 'SideCart')]")

	$(".//div[@id='Wrapper']//h2") {
		add_class("mw-h2")
	}

	# Featured Products carousel
	$(".//ul[contains(@class, 'ProductList')]") {
		carousel()

		switch_cart_links()
	}
}