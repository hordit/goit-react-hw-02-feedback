import styled from "styled-components";

export const Div = styled.div`
padding: 25px 10px 0 5px;
`;

export const Button = styled.button`
background-color: ${p => p.theme.colors.white};
border: ${p => p.theme.borderButton};
border-radius: 5px;
margin-right: 5px;
&:hover {
    background-color: ${p => {
        switch (p.type) {
            case 'good':
                return 'green';
            case 'neutral':
                return 'orange';
            case 'bad':
                return 'red';
            default:
                return null;
        }
    }};
}
`;