import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    margin-top: 80px;
    max-width: 450px;
    line-height: 56px;
`;

export const Form = styled.form`
    margin-top: 50px;
    max-width: 700px;
    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        background: #04d361;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: all 0.2s;
        &:hover {
            transform: scale(1.02);
        }
    }
`;

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
        'Helvetica Neue', sans-serif;
    a {
        border-radius: 5px;
        background: #fff;
        padding: 15px;
        text-decoration: none;
        color: #3a3a3a;
        display: flex;
        flex-direction: row;
        align-items: center;
        transition: all 0.2s;

        & + a {
            margin: 10px 0;
        }

        &:hover {
            transform: translateX(10px);
        }

        img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
        }

        div {
            padding: 0 20px;
            p {
                color: a8a8b3;
            }
        }

        svg {
            margin-left: auto;
            color: #cbcbd6;
        }
    }
`;
