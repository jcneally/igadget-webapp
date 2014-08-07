
# Get rid of the loading spinner
remove(".//div[@id='AjaxLoading']")


$("//div[@id='SearchForm']/form//input[@type='image']") {
  wrap("div", class: "mw_search_btn sprites-search")
  attribute("style", "opacity:0;")
  attribute("src", "")
  add_class("mw-search-button")
}

$(".//div[@id='Header']") {
  add_class("mw-header")

  attribute("data-ur-set", "toggler")
  $("./div[@id='Logo']") {
    add_class("mw-logo")

    # Move top menu into #Logo container
    move_here("../../../div[@id='TopMenu']", "bottom") {
	    # Remove unwanted top menu items from upper menu
	    remove(".//li[not(contains(@class, 'CartLink') or contains(@class, 'First'))]")
	  }
    
    # Shopping cart
    move_here("(.//div[@id='TopMenu']//a)[1]", "top") {
        text("")
        insert("div", class: "mw_cart_btn sprites-cart")
    }

    # Profile button
    move_here("(.//div[@id='TopMenu']//a)[1]", "top") {
        text("")
        insert("div", class: "mw_profile_btn sprites-user")
    }

    remove("./div[@id='TopMenu']")
     
  }

  remove("./br")

  # Insert HTML for bottom of header
  insert("div", class: "mw_header_bottom") {
    insert("div", class: "mw_header_bottom_padding"){
	    insert("div", class: "mw_search")
	    insert("div", class: "mw_menu_btn sprites-menu", data-ur-toggler-component: "button")
    }
  }

  # Fill search HTML
  $("..//div[@class='mw_search']") {
	# Move search form into container element
	move_here("//div[@id='SearchForm']", "bottom") {
	  remove("./p")

	  $("./form") {
        remove("./label")
        # Change search button background image
        $("./input[@type='image']") {
          wrap("div", class: "mw_search_btn sprites-search")
        }
        $("./input[@type='text']") {
          attribute("placeholder", "Search...")
        }
      }
	  }
  }

  # Move menu items into header
  move_here("../div[@id='Menu']", "bottom") {
  	attribute("data-ur-toggler-component", "content")

    remove("./ul[1]")

  	# Move "Category List" element on bottom of #Menu element
  	move_here("../../div[@id='Wrapper']/div[@class='Left']/div[@id='SideCategoryList']", "bottom")
  	$$("li") {
  	  #add_class("mw_bar2")
      $("./a") {
        inner_wrap("li", class: "mw_bar2")
      }
      unwrap()
  	}
  }

  # Add mw class to category dropdown
  $(".//div[@id='Menu']") {
    $("./div[contains(@class, 'CategoryList')]") {
      add_class("mw-category-list")

      $("./h2") {
        add_class("mw-category-header")
      }
    }
  }

}
