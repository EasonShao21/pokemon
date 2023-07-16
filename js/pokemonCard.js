export default {
  name: "pokemon-card",
  template: `            
          <div style="position: relative;" class="pokemon_card"> 
            <figure class="card_front">
              <h3> #{{ pokemonDetail.no }}</h3>
              <img :src="pokemonDetail.img_url" alt="" />
              <div class="clearfix">
                <h4>{{ pokemonDetail.name }}</h4>
              </div>
              <label class="pokemon_card_type" :class="advanceTypeClass(pokemonDetail.advances_type[0])">
                <span>{{ advanceTypeReturnName(pokemonDetail.advances_type[0]) }}</span>
              </label>
              <label v-if="pokemonDetail.advances_type.length>1" class="pokemon_card_type2" :class="advanceTypeClass(pokemonDetail.advances_type[1])">
                <span>{{ advanceTypeReturnName(pokemonDetail.advances_type[1]) }}</span>
              </label>
            </figure>
            <figure class="card_back">
              <div class="introduction">

              </div>
            </figure>
          </div>
        `,
  props: ["pokemonDetail"],
  data() {
    return {};
  },
  methods: {
    advanceTypeClass(adv) {
      switch (adv) {
        case "normal":
          return "card_normal_color";
          break;
        case "fire":
          return "card_fire_color";
          break;
        case "water":
          return "card_water_color";
          break;
        case "grass":
          return "card_grass_color";
          break;
        case "electric":
          return "card_electric_color";
          break;
        case "ice":
          return "card_ice_color";
          break;
        case "fighting":
          return "card_fighting_color";
          break;
        case "poison":
          return "card_poison_color";
          break;
        case "ground":
          return "card_ground_color";
          break;
        case "flying":
          return "card_flying_color";
          break;
        case "psychic":
          return "card_psychic_color";
          break;
        case "bug":
          return "card_bug_color";
          break;
        case "rock":
          return "card_rock_color";
          break;
        case "ghost":
          return "card_ghost_color";
          break;
        case "dragon":
          return "card_dragon_color";
          break;
      }
    },
    advanceTypeReturnName(adv) {
      switch (adv) {
        case "normal":
          return "一般";
          break;
        case "fire":
          return "火";
          break;
        case "water":
          return "水";
          break;
        case "grass":
          return "草";
          break;
        case "electric":
          return "電";
          break;
        case "ice":
          return "冰";
          break;
        case "fighting":
          return "格鬥";
          break;
        case "poison":
          return "毒";
          break;
        case "ground":
          return "地面";
          break;
        case "flying":
          return "飛行";
          break;
        case "psychic":
          return "超能";
          break;
        case "bug":
          return "蟲";
          break;
        case "rock":
          return "岩石";
          break;
        case "ghost":
          return "幽靈";
          break;
        case "dragon":
          return "龍";
          break;
      }
    }
  },
};
