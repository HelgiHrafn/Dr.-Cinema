import dark from '../styles/colors'

const base = {
    headings: {
        fontFamily: 'Futura',
        color: 'white'
    }
}

export const headings = {
    h1: {
        ...base.headings,
        fontSize: 30
    },
    h2: {
        ...base.headings,
        fontSize: 22
    },
    h3: {
        ...base.headings,
        fontSize: 16
    },
    h4: {
        ...base.headings,
        fontSize: 11
    },
    b1: {
        fontFamily: 'Futura',
        color: "#474E68",
        fontSize: 22,
        paddingHorizontal: 5
    },
    b2:
        {
        fontFamily: 'Futura',
        color: "#474E68",
        fontSize: 16,
        }
};
