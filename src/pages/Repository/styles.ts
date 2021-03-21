import styled from 'styled-components';

export const Header = styled.header`
    $color-primary: red;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8a8;
        transition: all 0.2s;

        &:hover {
            color: #666;
        }

        svg {
            margin-right: 4px;
        }
    }
`;

export const RepositoryInfo = styled.section`
    margin-top: 80px;

    header {
        display: flex;
        align-items: center;

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }

        div {
            margin-left: 24px;

            strong {
                font-size: 36px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #737380;
                margin-top: 4px;
            }
        }
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;
        li {
            & + li {
                margin-left: 80px;
            }
        }
        strong {
            display: block;
            font-size: 36px;
            color: #3d3d4d;
        }
        span {
            display: block;
            margin-top: 4px;
            color: #6c6c80;
        }
    }
`;

export const Issues = styled.div`
    margin-top: 80px;
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
