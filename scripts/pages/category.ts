$$("body") {
	# Adding a class for page-specific styling
	add_class("_category")

	# Remove newsletter subscription
	#remove(".//div[contains(@class, 'NewsletterSubscription')]")

	# Remove breadcrumbs
	#remove(".//div[contains(@class, 'Breadcrumb')]")

	# Remove compare button
	remove(".//div[contains(@class, 'CompareButton')]")

	# Remove top sellers
	remove(".//div[contains(@class, 'TopSellers')]")

	# Remove new products
	#remove(".//div[contains(@class, 'NewProducts')]")
	cleanup()

	# Remove popular products
	remove(".//div[contains(@class, 'PopularProducts')]")

	$$("#Wrapper") {

		move_here(".//*[@id='CategoryHeading']", position("top"))

		$$(".Left") {

			$$("li") {
		      $("./a") {
		        inner_wrap("li") 
		      }
		      unwrap()
		  	}

		  	$$("li") {
		  		insert_bottom("div", class: "mw_arrow")
		  	}

			$(".//*[@id='SideShopByBrand' or @id='SideCategoryShopByPrice']") {
				attribute("data-ur-set", "toggler")
				add_class("mw-product-toggler")

				$(".//h2") {
					add_class("mw_bar1")
					attribute("data-ur-toggler-component", "button")
					insert("div", class: "mw_indicator")
				}

				$("./div") {
					attribute("data-ur-toggler-component", "content")

				}
			}

		}

		$$(".Content") {

			$$(".ProductList") {
				add_class("mw-product-list")
				switch_cart_links()
			}

			$$("strong") {
				unwrap()
			}

			$(".//li") {
				attribute("style") {
					remove()
				}

				$(".//div[contains(@class, 'ProductPriceRating')]") {
					inner_wrap("span", class: "color-red")
					$$("em") {
						unwrap()
					}
				}

				wrap_together("./div[not(contains(@class, 'ProductImage'))]", "div", class: "mv_product_details")
				inner_wrap("div", class: "mw_product")
			}
		}

	}

	$$("#LayoutColumn1") {
		move_here("//div[contains(@class, 'SortBox')]", position("after")) {
			add_class("mw-sortbox")
		}
	}
}