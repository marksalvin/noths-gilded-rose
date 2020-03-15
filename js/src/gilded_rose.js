function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

function update_quality() {
  if (!Array(items)) {
    return;
  }

  items = items.map(item => {
    if (item.name === 'Aged Brie') {
      return {
        ...item,
        quality: item.quality + 1 <= 50 ? item.quality + 1 : 50,
        sell_in: item.sell_in - 1,
      };
    }

    if (item.name === 'Sulfuras, Hand of Ragnaros') {
      return item;
    }

    if (
      item.name === 'Backstage passes to a TAFKAL80ETC concert'
      && item.sell_in > 10
    ) {
      return {
        ...item,
        quality: item.quality + 1 <= 50 ? item.quality + 1 : 50,
        sell_in: item.sell_in - 1,
      };
    }

    if (
      item.name === 'Backstage passes to a TAFKAL80ETC concert'
      && item.sell_in <= 10
      && item.sell_in >= 6
    ) {
      return {
        ...item,
        quality: item.quality + 2 <= 50 ? item.quality + 2 : 50,
        sell_in: item.sell_in - 1,
      };
    }

    if (
      item.name === 'Backstage passes to a TAFKAL80ETC concert'
      && item.sell_in <= 5
      && item.sell_in >= 1
    ) {
      return {
        ...item,
        quality: item.quality + 3 <= 50 ? item.quality + 3 : 50,
        sell_in: item.sell_in - 1,
      };
    }

    if (
      item.name === 'Backstage passes to a TAFKAL80ETC concert'
      && item.sell_in <= 0
    ) {
      return {
        ...item,
        quality: 0,
        sell_in: item.sell_in - 1,
      };
    }

    // Default case
    const updatedQuality = item.sell_in <= 0 ? item.quality - 2 : item.quality - 1;

    return {
      ...item,
      quality: updatedQuality >= 0 ? updatedQuality : 0,
      sell_in: item.sell_in - 1,
    }
  });
}
