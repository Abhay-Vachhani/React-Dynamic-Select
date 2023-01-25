import { useState } from "react";

function App() {
	const [macros, setMacros] = useState(0)
	const [create, setCreate] = useState({
		breakFast: {
			name: 'Break Fast',
			value: {
				sukiBhaji: {
					name: 'Suki Bhaji',
					macros: {
						energy: {
							name: 'Energy',
							value: '150 Kcal'
						},
						protein: {
							name: 'Protein',
							value: '0g'
						},
						totalFat: {
							name: 'Total Fat',
							value: '0g'
						},
					}
				},
				bajro: {
					name: 'Bajro',
					macros: {
						energy: {
							name: 'Energy',
							value: '200 Kcal'
						},
						protein: {
							name: 'Protein',
							value: '10g'
						},
						totalFat: {
							name: 'Total Fat',
							value: '2g'
						},
					}
				},
				roti: {
					name: 'Roti',
					macros: {
						energy: {
							name: 'Energy',
							value: '300 Kcal'
						},
						protein: {
							name: 'Protein',
							value: '20g'
						},
						totalFat: {
							name: 'Total Fat',
							value: '1g'
						},
					}
				},
			},
			macros: {}
		},
		midTime: {
			name: 'Mid Time',
			value: {
				bajro: {
					name: 'Bajro',
					macros: {
						energy: {
							name: 'Energy',
							value: '200 Kcal'
						},
						protein: {
							name: 'Protein',
							value: '10g'
						},
						totalFat: {
							name: 'Total Fat',
							value: '2g'
						},
					}
				},
				roti: {
					name: 'Roti',
					macros: {
						energy: {
							name: 'Energy',
							value: '300 Kcal'
						},
						protein: {
							name: 'Protein',
							value: '20g'
						},
						totalFat: {
							name: 'Total Fat',
							value: '1g'
						},
					}
				},
			},
			macros: {}
		},
		launch: {
			name: 'Launch',
			value: {
				sukiBhaji: {
					name: 'Suki Bhaji',
					macros: {
						energy: {
							name: 'Energy',
							value: '150 Kcal'
						},
						protein: {
							name: 'Protein',
							value: '0g'
						},
						totalFat: {
							name: 'Total Fat',
							value: '0g'
						},
					}
				},
				bajro: {
					name: 'Bajro',
					macros: {
						energy: {
							name: 'Energy',
							value: '200 Kcal'
						},
						protein: {
							name: 'Protein',
							value: '10g'
						},
						totalFat: {
							name: 'Total Fat',
							value: '2g'
						},
					}
				},
			},
			macros: {}
		},
	})




	const selectHandler = (e) => {
		let [meal, recp] = e.target.value.split('_')
		create[meal].macros = create[meal].value[recp].macros
		setCreate(create)
		setMacros(macros + 1)
	}

	return (
		<>
			{
				Object.entries(create).map(([mealId, meal]) => {
					return (
						<div key={mealId}>
							<div style={{ marginTop: 50, backgroundColor: '#f1f1f1', padding: 20 }}>
								<h4>{meal.name}</h4>
								<div style={{ marginTop: 10, backgroundColor: '#f1f1f1', padding: 20 }}>
									<select onChange={e => selectHandler(e)}>
										<option value={-1}>Select</option>
										{
											Object.entries(meal.value).map(([recId, rec]) => {
												return (
													<option key={recId} value={mealId + '_' + recId}>{rec.name}</option>
												)
											})
										}
									</select>
									<div style={{ marginTop: '10px', border: '1px solid gray' }}>
										<button style={{ padding: 2 }}>Macros</button>
										<span style={{ marginLeft: 10, padding: 2, paddingBottom: 3 }}>
											{
												macros !== 0 && Object.entries(meal.macros).map(([macroId, macro]) => {
													return (
														<div key={macroId}>
															{
																macro.name
															} : {
																macro.value
															}
														</div>
													)
												})
											}
										</span>
									</div>
								</div>
							</div>
						</div>
					)
				})
			}
		</>
	);
}

export default App;
