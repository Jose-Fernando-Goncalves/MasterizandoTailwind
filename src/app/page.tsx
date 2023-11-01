'use client'
import { Clock, File, Globe, Mail, Trash, UploadCloud, User } from "lucide-react"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import * as React from "react"

export default function Home() {
  const [selected, setSelected] = React.useState(0)
  const [image, setImage] = React.useState("")
  const [files, setFiles] = React.useState(['José Fernando']);
  const [bio, setBio] = React.useState("Tenho 21 anos e sou um programador Full Stack júnior. Desde o início da minha jornada na programação, descobri que minha maior força é a capacidade de aprendizado rápido. Sou alguém que acredita que a melhor maneira de crescer é enfrentando novos problemas e dominando novas habilidades. Trabalho com uma variedade de tecnologias, incluindo Next.js, React.js, React Native e o framework Laravel 9. Em relação à língua, possuo um nível médio de inglês que me permite entender documentação técnica e de desenvolvimento.")
  const [parent] = useAutoAnimate();

  function handleImage(e: any) {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  function handleNewFile(e: any) {
    const file = e.target.files[0];
    if (file) {
      setFiles((prevFiles) => {
        return [...prevFiles, file.name];
      });
    }
  };

  function removeFile(index: any) {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  }


  return (
    <div className="h-fit px-8">
      <h1 className='text-cyan-500 text-2xl font-medium'>Settings</h1>

      <div className="flex flex-row mt-6 border-b border-slate-800 gap-2">
        <div onClick={() => setSelected(0)} className={`px-1 pb-4 text-sm font-medium ${selected === 0 ? 'border-b-2 border-cyan-500 text-cyan-400' : 'text-slate-400 hover:text-cyan-400'}`}>
          My Details
        </div>

        <div onClick={() => setSelected(1)} className={`px-1 pb-4 text-sm font-medium ${selected === 1 ? 'border-b-2 border-cyan-500 text-cyan-400' : 'text-slate-400 hover:text-cyan-400'}`}>
          Profile
        </div>

        <div onClick={() => setSelected(2)} className={`px-1 pb-4 text-sm font-medium ${selected === 2 ? 'border-b-2 border-cyan-500 text-cyan-400' : 'text-slate-400 hover:text-cyan-400'}`}>
          Password
        </div>
      </div>

      <div className="mt-6 flex flex-col">
        <div className="flex justify-between items-center gap-2 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-medium">Personal Info</h2>
            <span className="text-sm text-slate-400">Update your photo and personal details here</span>
          </div>
          <div className="flex flex-row gap-4">
            <button form="form" className="px-4 py-2 border rounded-md text-center font-medium text-sm hover:bg-slate-900" type="submit">
              Cancel
            </button>

            <button form="form" className="px-4 py-2 bg-cyan-500 rounded-md text-center font-medium text-sm hover:bg-cyan-400" type="submit">
              Save
            </button>
          </div>

        </div>

        <form id="form" className="mt-6 flex flex-col w-full pb-5 gap-10 divide-y divide-slate-800" action={''}>
          <div className="grid grid-cols-form gap-3 pb-5">
            <label htmlFor="FirstName" className="text-sm font-medium text-white">
              Name
            </label>
            <div className="gap-6 grid grid-cols-2">
              <input type="text" name="FirstName" defaultValue={'José Fernando'} id="FirstName" placeholder="José Fernando" className="input px-4 py-2 bg-transparent focus:outline-cyan-500 focus:outline-double outline-none border border-slate-800 rounded-md" />
              <input type="text" placeholder="Gonçalves" defaultValue={'Gonçalves'} className="input px-4 py-2 bg-transparent border border-slate-800 rounded-md focus:outline-cyan-500 focus:outline-double outline-none" />
            </div>
            <div />
          </div>

          <div className="grid grid-cols-form gap-3 py-10">
            <label htmlFor="email" className="text-sm font-medium text-white">
              Email Address
            </label>

            <div className="relative">
              <span className="absolute left-4 top-2">
                <Mail />
              </span>
              <input
                className="input px-4 pl-12 py-2 bg-transparent focus:outline-cyan-500 focus:outline-double outline-none border border-slate-800 rounded-md w-full"
                type="text"
                defaultValue={'rodocellcrz@gmail.com'}
                name="fullName"
                id="fullName"
              />
            </div>
            <div />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-form gap-3 py-10">
            <label htmlFor="email" className="text-sm font-medium text-white">
              Your photo
              <span className="text-sm text-slate-400 font-normal block mt-1">This will be displayed on your profile</span>
            </label>


            <div className="flex gap-6 items-start">
              {image ?
                <div className="w-20 h-20 flex items-center justify-center bg-cyan-400 rounded-full">
                  <img src={image} alt="profile image" className="w-20 h-20 rounded-full" />
                </div>
                :
                <div className="w-20 h-20 flex items-center justify-center bg-cyan-400 rounded-full">
                  <User className="w-10 h-10 text-cyan-700" />
                </div>}

              <div className="lg:w-[90%] w-[80%] relative transition-all group h-full flex rounded-md items-center justify-center border border-slate-800 flex-col px-4 py-8 gap-4 hover:bg-cyan-800/20">
                <input onChange={handleImage} className="w-full h-full opacity-0 bg-transparent absolute" accept="image/*" type="file" />
                <div className="flex items-center justify-center w-16 h-16 bg-slate-600 transition-all border-slate-800 group-hover:bg-cyan-400 rounded-full border-8 group-hover:border-cyan-600 p-2">
                  <UploadCloud className="w-14 h-14 text-cyan-50" />
                </div>
                <span className="text-2xl text-cyan-400">Drag and Drop</span>
                <span className="text-sm text-slate-400">SVG, PNG JPG or GIF (Max 10MB)</span>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-form gap-3 py-10">
            <label htmlFor="role" className="text-sm font-medium text-white">
              Role
            </label>

            <input type="text" name="role" defaultValue={'Programmer'} id="role" placeholder="Programmer" className="input px-4 py-2 w-full bg-transparent focus:outline-cyan-500 focus:outline-double outline-none border border-slate-800 rounded-md" />
            <div />
          </div>

          <div className="grid grid-cols-form gap-3 py-10">
            <label htmlFor="email" className="text-sm font-medium text-white">
              Country
            </label>

            <div className="relative">
              <span className="absolute left-4 top-2">
                <Globe />
              </span>
              <select
                className="input px-4 pl-12 py-2 bg-transparent focus:outline-cyan-500 focus:outline-double outline-none border border-slate-800 rounded-md w-full"
                defaultValue={'Brasil'}
                name="Country"
                id="Country"
              >
                <option className="text-black" value={'Brasil'}>Brasil</option>
                <option className="text-black" value={'United States'}>United States</option>
                <option className="text-black" value={'Portugal'}>Portugal</option>
              </select>
            </div>
            <div />
          </div>


          <div className="grid grid-cols-form gap-3 py-10">
            <label htmlFor="email" className="text-sm font-medium text-white">
              Timezone
            </label>

            <div className="relative">
              <span className="absolute left-4 top-2">
                <Clock />
              </span>
              <select
                className="input px-4 pl-12 py-2 bg-transparent focus:outline-cyan-500 focus:outline-double outline-none border border-slate-800 rounded-md w-full"
                defaultValue={'Brasil'}
                name="Timezone"
                id="Timezone"
              >
                <option className="text-black" value={'Brasil'}>America São Paulo (UTC-03:00)</option>
                <option className="text-black" value={'Pacific'}>Pacific Stand Time (UTC-08:00)</option>
              </select>
            </div>
            <div />
          </div>

          <div className="grid grid-cols-form gap-3 py-10">
            <label htmlFor="email" className="text-sm font-medium text-white">
              Bio
              <span className="text-sm text-slate-400 font-normal block mt-1">This will be displayed on your profile</span>
            </label>


            <div className="flex gap-6 items-start flex-col">
              <textarea onChange={(e) => setBio(e.target.value)} rows={12} defaultValue={bio} placeholder="Write your bio here..." className="w-full text-justify transition-all group h-full flex rounded-md items-center justify-center bg-transparent border focus:outline-cyan-500 focus:outline-double outline-none border-slate-800 flex-col px-4 py-2 resize-none">
              </textarea>
              <span className="text-sm text-slate-400">{bio.length} characters</span>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 py-10">
            <label htmlFor="email" className="text-sm font-medium text-white">
              Portfolio projects
              <span className="text-sm text-slate-400 font-normal block mt-1">Share a few snippets of your work</span>
            </label>

            <div className="flex flex-col gap-5">
              <div className="relative w-full transition-all group h-full flex rounded-md items-center justify-center border border-slate-800 flex-col px-4 py-8 gap-4 hover:bg-cyan-800/20">
                <input onChange={handleNewFile} className="w-full h-full opacity-0 bg-transparent absolute" type="file" />
                <div className="flex items-center justify-center w-16 h-16 bg-slate-600 transition-all border-slate-800 group-hover:bg-cyan-400 rounded-full border-8 group-hover:border-cyan-600 p-2">
                  <UploadCloud className="w-14 h-14 text-cyan-50" />
                </div>
                <span className="text-2xl text-cyan-400">Drag and Drop</span>
                <span className="text-sm text-slate-400">Share a few snippets</span>
              </div>

              <div ref={parent} className="flex flex-col gap-4">
                {files && files.map((file, index) => (
                  <div className="w-full transition-all h-fit flex rounded-md border border-slate-800 px-4 py-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-cyan-400 rounded-full p-2">
                      <File className="w-10 h-10 text-cyan-700" />
                    </div>

                    <div className="flex relative flex-col gap-2 px-2 h-fit w-full">
                      <span className="text-lg text-cyan-400">{file}</span>
                      <div className="flex flex-row items-center justify-center gap-2">
                        <div className="w-full bg-slate-800 h-2 rounded-r-full rounded-l-full">
                          <div style={{ width: `33%` }} className="bg-cyan-400 h-full rounded-r-full rounded-l-full"></div>
                        </div>
                        <span className="text-sm text-slate-400">33%</span>
                      </div>
                      <Trash className="w-6 h-6 absolute text-red-400 right-4 hover:text-red-500" onClick={() => removeFile(index)} />
                    </div>
                  </div>
                ))}

              </div>

            </div>

          </div>


          <div className="flex items-center justify-end pt-6">
            <div className="flex flex-row gap-4">
              <button form="form" className="px-4 py-2 border rounded-md text-center font-medium text-sm hover:bg-slate-900" type="submit">
                Cancel
              </button>

              <button form="form" className="px-4 py-2 bg-cyan-500 rounded-md text-center font-medium text-sm hover:bg-cyan-400" type="submit">
                Save
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}
