import Layout from '../components/layout'
import Loading from '../components/loading'
import SubmitBtn from '../components/submit-button'
import TextBtn from '../components/text-button'
import FormHead from '../components/from-head'
import Footer from '../components/footer'
import FormText from '../components/form-text'

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
			'http://localhost:2022/sumv2',
			{
				body: JSON.stringify({
					url: event.target.url.value,
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
				return response.json()
			} else {
				return {
					"success": false,
					"results": err
				}
			}
		}).catch(err => {
			boxLoading.style.display = 'none';
			submitBtn.style.display = 'block';
			linkBtn.style.display = 'block';
			deskripsiInput.removeAttribute("readonly");
			return {
				"success": false,
				"results": err
			}
		})
		const result = await readData
		if (result.success) {
			summaryResults.innerHTML += result.results;
		} else {
			summaryResults.innerHTML += "Pembuatan rangkuman terinterupsi, " + result.results + " apakah servis berjalan?"
		}
	}

	return (
		<section className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
			<div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
				<FormHead></FormHead>
				<div className="mt-5">
					<form onSubmit={getSummary}>
						<FormText></FormText>
						<div className="flex flex-col mb-2">
							<Loading></Loading>
							<div id="summaryResults" className="text-justify"></div>
						</div>

						<SubmitBtn></SubmitBtn>
						<TextBtn url="/" name="DARI LINK"></TextBtn>
						<Footer></Footer>
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