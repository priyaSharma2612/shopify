import discountImg from '../assets/svg/discount.svg';
import truckImg from '../assets/svg/truck.svg';
import refundImg from '../assets/svg/refund.svg';
import supportImg from '../assets/svg/support.svg';

const policies = [
    {
        id: 1,
        img: truckImg,
        title: 'Free Delivery',
        description: 'Orders from all items'
    },
    {
        id: 2,
        img: refundImg,
        title: 'Return & Refund',
        description: 'Money back guarantee'
    },
    {
        id: 3,
        img: discountImg,
        title: 'Member Discount',
        description: 'on Orders above $99'
    },
    {
        id: 4,
        img: supportImg,
        title: 'Support 24/7',
        description: 'Contact us 24 hours a day'
    }
];

export default policies;