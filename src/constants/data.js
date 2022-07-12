import images from "./images"

const data = {
    user: {
        name: 'Tuatta',
        img: images.avt
    },
    summary: [
        {
            title: 'Sales',
            subtitle: 'Total sales today',
            value: '$1.000',
            percent: 70
        },
        {
            title: 'Orders',
            subtitle: 'Total orders today',
            value: '3000',
            percent: 49
        },
        {
            title: 'Revenue',
            subtitle: 'Total revenue today',
            value: '$678',
            percent: 38
        },
        {
            title: 'Visits',
            subtitle: 'Total visits today',
            value: '2345',
            percent: 55
        }
    ],
    revenueSummary: {
        title: 'Revenue',
        value: '$678',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '300K',
            title: 'Orders'
        },
        {
            value: '9.876K',
            title: 'Customers'
        },
        {
            value: '1.234K',
            title: 'Products'
        },
        {
            value: '$5678',
            title: 'Revenue'
        }
    ],
    revenueByChannel: [
        {
            title: 'Facebook',
            icon: <i className='bx bx-book' ></i>,
            visitor: 45,
            percent: 12,
            color: '#017EFA'
        },
        {
            title: 'Instagram',
            icon: <i className='bx bx-book' ></i>,
            visitor: 138,
            percent: 43,
            color: '#FD1F9B'
        },
        {
            title: 'Linkedin',
            icon: <i className='bx bx-book' ></i>,
            visitor: 75,
            percent: 20,
            color: '#007AB5'
        },
        {
            title: 'Youtube',
            icon: <i className='bx bx-book' ></i>,
            visitor: 12,
            percent: 5,
            color: '#FF0000'
        }
    ],
    revenueByMonths: [
        {
            title: 'Product one',
            labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
            data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
        },
        {
            title: 'Product two',
            labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
            data: [150, 120, 175, 228, 112, 223, 302, 150, 110, 67, 129, 176]
        }
    ]
}

export default data