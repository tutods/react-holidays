import { styled } from '@mui/material';

const FlagIcon = styled('span')`
	border-radius: 5px;

	font-size: ${({ theme }) => theme.typography.h4.fontSize};
`;

const cardStyle = {
	borderWidth: 2,
	borderStyle: 'solid',
	borderColor: 'transparent',
	py: 2,
	borderRadius: 2,
	boxShadow: 3,
	cursor: 'pointer',
	textDecoration: 'none',
	transition: 'border-color 0.25s ease-in-out',
	height: '100%',

	'&:hover': {
		borderColor: 'primary.main'
	}
};

export { FlagIcon, cardStyle };
