export default {
    name: "pokemon-card",
    template: `            
    <img class="pokemon_img" :src="pokemonDetail.img_url" alt="" >
        `,
    props: [
      "pokemonDetail"
    ],
    data() {
      return {
      };
    },
    methods: {
      advanceTypeClass(adv) {
        switch(adv) {
          case '一般': 
            return 'normal_color'
            break;
          case '火': 
            return 'fire_color'
            break;
          case '水': 
            return 'water_color'
            break;
          case '草': 
            return 'grass_color'
            break;
          case '電': 
            return 'electric_color'
            break;
          case '冰': 
            return 'ice_color'
            break;
          case '格鬥': 
            return 'fighting_color'
            break;
          case '毒': 
            return 'poison_color'
            break;
          case '地面': 
            return 'ground_color'
            break;
          case '飛行': 
            return 'flying_color'
            break;
          case '超能': 
            return 'psychic_color'
            break;
          case '蟲': 
            return 'bug_color'
            break;
          case '岩石': 
            return 'rock_color'
            break;
          case '幽靈': 
            return 'ghost_color'
            break;
          case '龍': 
            return 'dragon_color'
            break;
        } 
      }
    }
  };