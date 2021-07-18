import {
	Grid,
	TextField,
	Button,
	Card,
	CardContent,
	Typography,
	Box,
} from "@material-ui/core";
import AnimatedNumber from "react-animated-number";

export default function AboutUs() {
	return (
		<Grid container>
			<Grid
				container
				spacing={1}
				justify="center"
				alignItems="center"
				margin="auto"
			>
				<Grid item xs={12}>
					<Typography
						gutterBottom
						variant="h2"
						align="center"
						style={{ textDecoration: "underline" }}
					>
						About Us
					</Typography>
				</Grid>

				<Grid item xs={12} style={{ padding: "20px 5px", margin: "auto 2rem" }}>
					<Typography paragraph variant="body">
						The IEEE Student Branch , NIT Durgapur is a society of enthusiasts
						aimed at promoting research-related activities in the campus. We are
						a direct handshake to IEEE, an international body that allows
						countless young researchers the opportunity to present & publish
						their innovations every year. Comprising of bright researchers,
						developers, speakers, and other contributors we are a society that
						welcomes in the era of better research prospects, on the campus.
					</Typography>
				</Grid>

				<Grid item xs={12} sm={4} spacing={1} style={{ textAlign: "center" }}>
					<Box borderRight={0.1}>
						<AnimatedNumber
							style={{
								transition: "0.8s ease-out",
								color: "#4499fe",
								fontSize: "3rem",
								alignItems: "center",
							}}
							stepPrecision={0}
							duration={1000}
							value={50}
							formatValue={(n) => `${n} +`}
						/>
						<Typography variant="p" component="p" gutterBottom>
							Branch Members
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} sm={4} spacing={1} style={{ textAlign: "center" }}>
					<Box borderRight={0.1}>
						<AnimatedNumber
							style={{
								transition: "0.8s ease-out",
								color: "#4499fe",
								fontSize: "3rem",

								alignItems: "center",
							}}
							stepPrecision={0}
							duration={1000}
							value={30}
							formatValue={(n) => `${n} +`}
						/>

						<Typography variant="p" component="p" gutterBottom>
							Events and Workshops
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} sm={4} spacing={1} style={{ textAlign: "center" }}>
					<Box>
						<AnimatedNumber
							style={{
								transition: "0.8s ease-out",
								color: "#4499fe",
								fontSize: "3rem",

								alignItems: "center",
							}}
							stepPrecision={0}
							duration={1000}
							value={500}
							formatValue={(n) => `${n} +`}
						/>

						<Typography variant="p" component="p" gutterBottom>
							Participants
						</Typography>
					</Box>
				</Grid>
			</Grid>

			<Grid container>
				<Card
					style={{
						padding: "20px 5px",
						margin: "4rem auto",
						background: "linear-gradient(65deg, #e6f9ff 10%, #b3ecff 45%)",
					}}
				>
					<CardContent>
						<Typography gutterBottom variant="h5">
							Contact Us
						</Typography>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
							gutterBottom
						>
							Fill up the form and our team will get back to you...
						</Typography>
						<form>
							<Grid container spacing={1} justify="center" alignItems="center">
								<Grid xs={12} sm={6} item>
									<TextField
										placeholder="Enter first name"
										label="First Name"
										variant="outlined"
										fullWidth
										required
									/>
								</Grid>
								<Grid xs={12} sm={6} item>
									<TextField
										placeholder="Enter last name"
										label="Last Name"
										variant="outlined"
										fullWidth
										required
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										type="email"
										placeholder="Enter email"
										label="Email"
										variant="outlined"
										fullWidth
										required
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										type="number"
										placeholder="Enter phone number"
										label="Phone"
										variant="outlined"
										fullWidth
										required
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										label="Message"
										multiline
										rows={4}
										placeholder="Type your message here"
										variant="outlined"
										fullWidth
										required
									/>
								</Grid>
								<Grid item xs={12}>
									<Button
										type="submit"
										variant="contained"
										color="primary"
										fullWidth
									>
										Submit
									</Button>
								</Grid>
							</Grid>
						</form>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}
