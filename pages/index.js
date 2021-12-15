import Layout from '../components/layout'

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
          Sebuah program kecil menggunakan kekuatan artificial intelligence untuk merangkum konten berita. Simak cara kerjanya <a class="text-red-500" href="https://github.com/kangketikonlen/my-notebook/blob/main/Huggingface-transformer-summarization.ipynb">di sini</a> dan <a href="https://github.com/kangketikonlen/my-notebook/blob/main/Huggingface-transformer-summarization-v2.ipynb" class="text-red-500">di sini</a>.
        </div>
        <div className="mt-5">
          <form onSubmit={getSummary}>
            <div className="flex flex-col mb-5 text-center">
              <label htmlFor="text" className="mb-1 text-xs tracking-wide text-gray-600">Link Berita</label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <i className="fas fa-newspaper text-blue-500"></i>
                </div>

                <input id="url" type="text" name="url" className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Masukkan link berita di sini..." required={true} />
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
              <a href="/simple" className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-red-500 hover:bg-red-600 rounded-2xl py-2 w-full transition duration-150 ease-in">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </span>
                <span className="mr-2 ml-2 uppercase">Gunakan Text</span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </span>
              </a>
            </div>
            <div className="flex w-full mt-5 justify-center text-center">
              <span className='text-sm'>Dibuat dengan sepenuh ❤️ oleh Gilang Pratama. Untuk tujuan memenuhi challenge dari <a className="text-green-500" href="https://fathtech.co.id">@fathtech</a> </span>
            </div>
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