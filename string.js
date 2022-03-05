class String_functions {
  constructor(text, sq) {
    this.text = text;
    this.search_query = sq;
  }

  get list_array() {
    console.log(this.String_fragmentation(this.text));
  }
  // Getter function for disintegrating a String
  get disintegrate() {
    this.String_fragmentation(this.text);
  }

  get search_result() {
    this.String_search_query(this.search_query, this.text);
  }

  String_fragmentation(text) {
    const piecesArray = text.match(/.{1,6}/g);
    return piecesArray;
  }

  String_search_query(search_query, text) {
    // search query accepts a search string and searches for the pattern in the frames
    const array_string_list = this.String_fragmentation(text);

    for (let item of array_string_list) {
      const reg_ex = new RegExp(search_query);
      console.log(reg_ex);
      const result = item.match(reg_ex);
      return result;
    }
  }
}

const string_1 = new String_functions("pppppppptttttttppppp", "ppp");

string_1.search_result;
