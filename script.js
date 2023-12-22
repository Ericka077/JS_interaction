function generate(name) {
    var messages = [
      "You should wear fur coat and cowboy boots.",
      "Black leather jacket and skinny jeans, doesnt matter which color.",
      "black. Wear all black. You can never go wrong with that.",
      "cute sweater, with cute lttle bow for holiday vibe and sweatheart look",
      "I wanna kill mywelf",
      "mini skirt and fur leggings inside and long boots maybe?",
      "wool coat you have burried in your closet and style it with a scarf. "
  ];

    var randomIndex = Math.floor(Math.random() * messages.length);
    var message = `${name}, ${messages[randomIndex]}`;
    var outText = document.getElementById('output');
    outText.innerText = message;
  
    restyle(outText);
  }

  function restyle(outText) {
    var colors = ["#D8EDFF", "#FFFFD8", "#ECFFD8", "#D8E1FF", "#F9E1FD"];
    var fonts = ["'Courier New', Courier, monospace", "'Lucida Console', Monaco, monospace", "Arial, sans-serif", "Tahoma, Geneva, sans-serif"];
    var fontSizes = ["20px", "25px", "28px", "25px"];
  
    var colorIndex = Math.floor(Math.random() * colors.length);
    var fontIndex = Math.floor(Math.random() * fonts.length);
    var fontSizeIndex = Math.floor(Math.random() * fontSizes.length);
  
    outText.style.color = colors[colorIndex];
    outText.style.fontFamily = fonts[fontIndex];
    outText.style.fontSize = fontSizes[fontSizeIndex];
  }

  