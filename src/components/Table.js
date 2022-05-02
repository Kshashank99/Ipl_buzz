import React from "react";
import { useGlobalContext } from "../context";
// import Table from "react-bootstrap/Table";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
function Tables() {
	const { cricket, loading } = useGlobalContext();
	const scard = { w: 0, l: 0, pts: 0, m: 0 };
	const team = [...new Set(cricket.map((item) => item.team1))];
	const d = {};
	for (let i = 0; i < 10; i++) {
		d[team[i]] = { ...scard, st: [] };
	}
	// console.log(cricket[0])
	for (let i = 0; i < cricket.length; i++) {
		if (cricket[i].winner !== null) {
			d[cricket[i].winner]["w"] = d[cricket[i].winner]["w"] + 1;
			if (d[cricket[i].winner].st.length <= 5) {
				d[cricket[i].winner].st.push(<CheckCircleIcon color='success' />);
			}
			d[cricket[i].winner].m += 1;
			if (cricket[i].winner === cricket[i].team1) {
				d[cricket[i].team2].l += 1;
				if (d[cricket[i].winner].st.length <= 5) {
					// d[cricket[i].winner].st.push(<CheckCircleIcon color="success" />);
					d[cricket[i].team2].st.push(<RemoveCircleIcon color='error' />);
				}
				d[cricket[i].team2].m += 1;
			} else {
				d[cricket[i].team1].l += 1;
				if (d[cricket[i].winner].st.length <= 5) {
					d[cricket[i].team1].st.push(<RemoveCircleIcon color='error' />);
				}
				d[cricket[i].team1].m += 1;
			}
		}
	}
	for (let i = 0; i < cricket.length; i++) {
		if (cricket[i].winner !== null) {
			d[cricket[i].winner].st.splice(0, d[cricket[i].winner].st.length - 5);
		}
	}

	// })
	for (let i = 0; i < 10; i++) {
		d[team[i]].pts = 2 * d[team[i]].w;
	}
	console.log(d);

	const StyledTableCell = styled(TableCell)(({ theme }) => ({
		[`&.${tableCellClasses.head}`]: {
			backgroundColor: theme.palette.common.white,
			color: theme.palette.common.black
		},
		[`&.${tableCellClasses.body}`]: {
			fontSize: 14,
			backgroundColor: theme.palette.common.black,
			color: theme.palette.common.white
		}
	}));

	const StyledTableRow = styled(TableRow)(({ theme }) => ({
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.action.hover
		},
		// hide last border
		"&:last-child td, &:last-child th": {
			border: 0
		}
	}));

	function createData(index, team, m, w, l, pts, st) {
		return { index, team, m, w, l, pts, st };
	}

	const rows = [];
	for (let i = 0; i < 10; i++) {
		rows.push(
			createData(
				i + 1,
				team[i],
				d[team[i]].m,
				d[team[i]].w,
				d[team[i]].l,
				d[team[i]].pts,
				d[team[i]].st
			)
		);
	}

	return (
		<>
			<TableContainer m100 responsive='lg' component={Paper}>
				<Table sx={{ minWidth: 600 }} aria-label='customized table'>
					<TableHead>
						<TableRow>
							<StyledTableCell>Index</StyledTableCell>
							<StyledTableCell>Teams</StyledTableCell>
							<StyledTableCell align='right'>M</StyledTableCell>
							<StyledTableCell align='right'>W</StyledTableCell>
							<StyledTableCell align='right'>L</StyledTableCell>
							<StyledTableCell align='right'>PTS</StyledTableCell>
							<StyledTableCell align='right'>ST</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<StyledTableRow key={row.team}>
								<StyledTableCell component='th' scope='row'>
									{row.index}
								</StyledTableCell>
								<StyledTableCell component='th' scope='row'>
									{row.team}
								</StyledTableCell>
								<StyledTableCell align='right'>{row.m}</StyledTableCell>
								<StyledTableCell align='right'>{row.w}</StyledTableCell>
								<StyledTableCell align='right'>{row.l}</StyledTableCell>
								<StyledTableCell align='right'>{row.pts}</StyledTableCell>
								<StyledTableCell align='right'>{row.st}</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

export default Tables;
