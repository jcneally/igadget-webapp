$$("#Footer") {
  add_class("mw-footer")

	insert_top("br")
	insert("footer", "Powered by: <br />") {
		insert("div", class: "mv-footer-logo sprites-logo_white")
	}

	inner_wrap("div", class: "mw-footer-container")

	$("(.//a)[1]") {
		insert_before("br")
	}

	insert("br")
}