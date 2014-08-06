$$("#Footer") {
  insert_top("br")
  insert("footer", "Powered by: <br />", class: "mw-footer") {
    insert("div", class: "mv-logo sprites-logo_white")
  }

  inner_wrap("div", class: "mw-footer-container")

  $("(.//a)[1]") {
  	insert_before("br")
  }

  insert("br")
}
