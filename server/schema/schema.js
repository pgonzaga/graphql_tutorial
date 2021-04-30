const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLBoolean, GraphQLSchema } = graphql;

const VehicleType = new GraphQLObjectType({
  name: 'Vehicle',
  fields: () => ({
    id: { type: GraphQLString },
    category: { type: GraphQLString },
    consumer_recurring_payment_cents: { type: GraphQLInt},
    consumer_start_fee_cents: { type: GraphQLInt},
    consumer_three_year_recurring_payment_cents: { type: GraphQLInt},
    consumer_three_year_start_fee_cents: { type: GraphQLInt},
    consumer_two_year_recurring_payment_cents: { type: GraphQLInt},
    consumer_two_year_start_fee_cents: { type: GraphQLInt},
    current_estimated_value_cents: { type: GraphQLInt},
    display1: { type: GraphQLString },
    display2: { type: GraphQLString },
    image_urls: { type: GraphQLList(GraphQLString) },
    dealer_id: { type: GraphQLInt },
    dealer_location_coord: { type: GraphQLString },
    delivery_option: { type: GraphQLString },
    drivetrain: { type: GraphQLString },
    estimated_days_until_delivery: { type: GraphQLString },
    has_evox_image: { type: GraphQLBoolean },
    id: { type: GraphQLString },
    image_stock_profile_small: { type: GraphQLString },
    image_stock_three_quarter_small: { type: GraphQLString },
    is_color_specified: { type: GraphQLBoolean },
    is_fair_priced: { type: GraphQLBoolean },
    make: { type: GraphQLString },
    mileage: { type: GraphQLString },
    model: { type: GraphQLString },
    model_year: { type: GraphQLInt },
    payment_frequency: { type: GraphQLString },
    preferred_display_price: { type: GraphQLInt },
    recurring_payment_cents: { type: GraphQLInt },
    simple_exterior_color: { type: GraphQLString },
    start_fee_cents: { type: GraphQLInt },
    tag: { type: GraphQLString },
    transmission: { type: GraphQLString },
    trim: { type: GraphQLString },
    vehicle_acquisition_price_cents: { type: GraphQLInt },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    vehicle: {
      type: VehicleType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //code to get data from api
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
