import { faChessKnight, faChessQueen, faChessPawn } from '@fortawesome/free-solid-svg-icons';

const plans = [
    {id: 'prod_O3kQOqVOI2WiJb', name: 'Basic', description: 'For individuals and sole proprietors with basic assistant needs', icon: faChessPawn, prices: {priceId: 'price_1NHcvrIYEgZdzuGXQTTlcMpi', priceData: {unit_amount: 299}}, up_to: 50 }, 
    {id: 'prod_O3kQSeTeBlf2qu', name: 'Standard', description: 'For small to medium teams that need to interact with an assistant daily', icon: faChessKnight, prices: {priceId: 'price_1NHcw8IYEgZdzuGX3KSmL8MX', priceData: {unit_amount: 499}}, up_to: 500}, 
    {id: 'prod_O3kRSTrDJcSvxm', name: 'Premium', description: 'For automating and optimizing needs with all assistant features', icon: faChessQueen, prices: {priceId: 'price_1NHcwOIYEgZdzuGXvWLNMq5h', priceData: {unit_amount: 999}}, up_to: 5000 }
]

export default plans;