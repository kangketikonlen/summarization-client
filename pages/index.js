import Layout from '../components/layout'
import Loading from '../components/loading'
import SubmitBtn from '../components/submit-button'
import TextBtn from '../components/text-button'
import FormHead from '../components/from-head'
import Footer from '../components/footer'
import FormLink from '../components/form-link'

export default function Index() {
  const getSummary = async event => {
    event.preventDefault()
    // Loading dolo
    var summaryResults = document.getElementById('summaryResults');
    var boxLoading = document.getElementById('boxLoading');
    var submitBtn = document.getElementById('submitBtn');
    var linkBtn = document.getElementById('linkBtn');
    var urlInput = document.getElementById('url');
    boxLoading.style.display = 'block';
    submitBtn.style.display = 'none';
    linkBtn.style.display = 'none';
    urlInput.setAttribute("readonly", "true")
    summaryResults.innerHTML = "";
    // Request data from server
    const readData = await fetch(
      'http://194.163.40.82:2022/sumv2',
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
      urlInput.removeAttribute("readonly");
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
      urlInput.removeAttribute("readonly");
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
    <section className="sm:min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-col p-4 bg-white shadow-md sm:px-6 md:px-8 lg:px-10 py-8 sm:rounded-3xl w-50 max-w-md">
        <FormHead></FormHead>
        <div className="mt-5">
          <form onSubmit={getSummary}>
            <FormLink></FormLink>
            <div className="flex flex-col mb-2">
              <Loading></Loading>
              <div id="summaryResults" className="text-justify"></div>
            </div>
            <SubmitBtn></SubmitBtn>
            <TextBtn url="/simple" name="DARI TEKS"></TextBtn>
            <Footer></Footer>
          </form>
        </div>
      </div>
    </section>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}