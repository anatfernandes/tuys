import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Title } from "../shared";
import { Icons } from "../utils";

type WrapperProps = {
	showMenu: boolean;
};

export function Menu() {
	const navigate = useNavigate();
	const location = useLocation();

	function showMenu() {
		const isMainPage =
			location.pathname === "/settings" || location.pathname === "/settings/";
		const isMobileWidth = window.innerWidth <= 500;
		return isMainPage || !isMobileWidth;
	}

	return (
		<Wrapper showMenu={showMenu()}>
			<Title>Configurações</Title>

			<Option onClick={() => navigate("/settings/perfil")}>
				<div>
					<Icons type="me" />
					<span>Perfil</span>
				</div>
				<Icons type="continue" />
			</Option>

			<Option onClick={() => navigate("/settings/themes")}>
				<div>
					<Icons type="theme" />
					<span>Temas</span>
				</div>
				<Icons type="continue" />
			</Option>

			<Option>
				<div>
					<Icons type="exit" />
					<span>Sair</span>
				</div>
			</Option>
		</Wrapper>
	);
}

const Wrapper = styled.div<WrapperProps>`
	width: 40%;
	max-width: 260px;
	min-width: 200px;
	height: 100vh;
	background-color: ${(props) => props.theme.colors.pastelBlue};
	cursor: default;
	display: ${(props) => (props.showMenu ? "initial" : "none")};

	> h1 {
		margin-left: 20px;
	}

	@media (max-width: 500px) {
		width: 100%;
		max-width: 100%;
		height: fit-content;
		margin-bottom: 20px;
		background-color: ${(props) => props.theme.colors.background};
	}
`;

const Option = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	background-color: ${(props) => props.theme.colors.pastelBlue};
	color: ${(props) => props.theme.colors.white};
	font-size: 1.2rem;

	:hover {
		filter: brightness(0.9);
	}

	> div {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	span {
		margin-left: 10px;
	}

	svg {
		font-size: 1.4rem;
	}

	@media (max-width: 500px) {
		font-size: 1.1rem;

		svg {
			font-size: 1.3rem;
		}
	}
`;
