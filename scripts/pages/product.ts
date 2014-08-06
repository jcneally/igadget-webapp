$("//body"){
	add_class("_product")

	cleanup()

	remove(".//div[@id='ProductByCategory']")
	remove(".//div[contains(@class, 'AddToWishlist')]")
	remove(".//div[@id='LayoutColumn3']")

	$(".//div[@id='Wrapper']") {

		add_class("mw-product-wrapper")

		$("//div[contains(@class, 'ProductMain')]") {
			add_class("mw-product-main")

			$(".//div[contains(@class, 'DetailRow')]") {
				$(".//div[contains(@class, 'Label') or contains(@class, 'Value')]") {
					unwrap()
				}
			}

			$(".//div[contains(@class, 'BulkDiscount')]/input") {
				attr("style", "display:none")
				add_class("mw-addToCart")
				insert_before("div", class: "sprites-AddCartButton")
			}
		}

		$(".//ul[contains(@class, 'ProductList')]") {
			carousel()

			switch_cart_links()
		}

		$(".//div[@id='ProductReviews']") {
			$("./a") {
				remove("img")
				insert("div", class: "sprites-WriteReview")
			}
		}

	}
}