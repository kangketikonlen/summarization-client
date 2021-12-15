import Layout from '../components/layout'

export default function Simple() {
	const getSummary = async event => {
		event.preventDefault()
		// Loading dolo
		var summaryResults = document.getElementById('summaryResults');
		var boxLoading = document.getElementById('boxLoading');
		var submitBtn = document.getElementById('submitBtn');
		var linkBtn = document.getElementById('linkBtn');
		var deskripsiInput = document.getElementById('deskripsi');
		boxLoading.style.display = 'block';
		submitBtn.style.display = 'none';
		linkBtn.style.display = 'none';
		deskripsiInput.setAttribute("readonly", "true")
		summaryResults.innerHTML = "";
		// Request data from server
		const readData = await fetch(
			'http://127.0.0.1:2022/sumv1',
			{
				body: JSON.stringify({
					deskripsi: event.target.deskripsi.value,
				}),
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST'
			}
		).then(response => {
			boxLoading.style.display = 'none';
			submitBtn.style.display = 'block';
			linkBtn.style.display = 'block';
			deskripsiInput.removeAttribute("readonly");
			if (response.statusText == "OK") {
				return response
			} else {
				return {
					"success": false,
					"results": err
				}
			}
		}).catch(err => {
			boxLoading.style.display = 'none';
			return {
				"success": false,
				"results": err
			}
		})
		const result = await readData.json()
		summaryResults.innerHTML += result.results;
		console.log(result)
	}

	return (
		<section className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
			<div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
				<div className="font-medium self-center text-xl sm:text-3xl text-gray-800 text-center">
					Huggingface 🤗 Transformer Summarization
				</div>
				<div className="mt-4 self-center text-xl sm:text-sm text-gray-800 text-center">
					Sebuah program kecil menggunakan kekuatan artificial intelligence untuk merangkum konten berita.
				</div>
				<div className="mt-5">
					<form onSubmit={getSummary}>
						<div className="flex flex-col mb-5 text-center">
							<label htmlFor="text" className="mb-1 text-xs tracking-wide text-gray-600">Input Text</label>
							<div className="relative">
								<textarea name="deskripsi" id="deskripsi" className="resize-none text-sm placeholder-gray-500 pl-4 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" rows="10" placeholder="Masukkan text panjang dari grup WhatsApp keluargamu di sini..." required={true} ></textarea>
							</div>
						</div>

						<div className="flex flex-col mb-2">
							<div id="boxLoading" className="hidden text-center">
								<div className="flex items-stretch justify-center">
									<div className="w-screen h-24 border-2 rounded-md text-center">
										<div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
											<div className="flex flex-col space-y-3">
												<div className="w-72 bg-gray-300 h-6 rounded-md ">
												</div>
												<div className="w-48 bg-gray-300 h-6 rounded-md ">
												</div>
											</div>
										</div>
									</div>
								</div>
								<span className="text-sm">Robot A.I sedang melakukan kalkulasi... Biasanya 30 sampai 60 detik. Maklum, server budget hehe 🙏🏻</span>
							</div>
							<div id="summaryResults" className="text-justify"></div>
						</div>

						<div id="submitBtn" className="flex w-full">
							<button type="submit" className=" flex mt-1 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
								</svg>
								<span className="mr-2 ml-2 uppercase">Buat Rangkuman</span>
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
								</svg>
							</button>
						</div>
						<div id="linkBtn" className="flex w-full">
							<a href="/" className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-teal-500 hover:bg-teal-600 rounded-2xl py-2 w-full transition duration-150 ease-in">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
								</svg>
								<span className="mr-2 ml-2 uppercase">Gunakan Link</span>
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
								</svg>
							</a>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

Simple.getLayout = function getLayout(page) {
	return (
		<Layout>
			{page}
		</Layout>
	)
}