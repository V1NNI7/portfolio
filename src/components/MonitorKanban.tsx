import Image from 'next/image'
import kanbanGif from '@/assets/images/kanban.gif'

export default function MonitorKanban() {
  return (
    <div className="browser overflow-hidden rounded-lg bg-gray-800">
      <div className="flex items-center bg-gray-200 p-2">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="mx-2 h-3 w-3 rounded-full bg-yellow-400"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <div className="ml-2 h-4 w-full rounded-full bg-gray-100"></div>
      </div>
      <div className="h-96 bg-white">
        <div className="h-full overflow-auto bg-neutral-900 p-2">
          <Image
            width={600}
            height={338}
            src={kanbanGif}
            className="h-full w-full"
            alt=""
          />
          {/* <div className="mx-auto flex h-full w-5/6">
            <div className="relative my-8 w-full overflow-hidden rounded-lg bg-neutral-800 shadow">
              <div className="grid h-full grid-cols-[100px_minmax(100px,_1fr)_0]">
                <div className="bg-neutral-700">
                  <h2 className="font-alt animate-pulse p-2 text-center text-sm font-semibold text-violet-500">
                    My Kanban
                  </h2>
                </div>

                <div className="grid h-full grid-rows-[52px_minmax(72px,_1fr)_0] overflow-hidden">
                  <nav className="flex items-center justify-end gap-2 px-8 py-2">
                    <div className="mr-auto"></div>
                    <div className="relative flex items-center">
                      <button className="group text-xl text-neutral-200 hover:text-neutral-200/60">
                        <IoMdNotifications />
                      </button>
                    </div>

                    <button className="group text-xl text-neutral-200 hover:text-neutral-200/60">
                      <IoMdSettings />
                    </button>

                    <div className="animate-pulse rounded-full bg-neutral-500 p-4" />
                  </nav>
                  <div className="flex h-full w-full bg-neutral-600/20 p-2">
                    <div className="inline-block h-full scroll-m-2 whitespace-nowrap align-top">
                      <div className="mr-2 flex w-[120px] flex-col gap-2 rounded-md bg-neutral-800 p-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs text-neutral-200">Backlog</h3>

                          <div className="flex items-center gap-1">
                            <IoAddOutline />
                            <IoEllipsisVerticalSharp className="text-xs" />
                          </div>
                        </div>

                        <div className="h-[30px] animate-pulse rounded-md bg-neutral-700 p-1"></div>
                        <div className="h-[20px] animate-pulse rounded-md bg-neutral-700 p-1"></div>
                        <div className="h-[40px] animate-pulse rounded-md bg-neutral-700 p-1"></div>
                        <div className="h-[25px] animate-pulse rounded-md bg-neutral-700 p-1"></div>
                      </div>
                    </div>
                    <div className="inline-block h-full scroll-m-2 whitespace-nowrap align-top">
                      <div className="mr-2 flex w-[120px] flex-col gap-2 rounded-md bg-neutral-800 p-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs text-neutral-200">
                            In Progress
                          </h3>

                          <div className="flex items-center gap-1">
                            <IoAddOutline />
                            <IoEllipsisVerticalSharp className="text-xs" />
                          </div>
                        </div>

                        <div className="h-[50px] animate-pulse rounded-md bg-neutral-700 p-1"></div>
                        <div className="h-[20px] animate-pulse rounded-md bg-neutral-700 p-1"></div>
                      </div>
                    </div>
                    <div className="inline-block h-full scroll-m-2 whitespace-nowrap align-top">
                      <div className="mr-2 flex w-[120px] flex-col gap-2 rounded-md bg-neutral-800 p-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs text-neutral-200">Done</h3>

                          <div className="flex items-center gap-1">
                            <IoAddOutline />
                            <IoEllipsisVerticalSharp className="text-xs" />
                          </div>
                        </div>

                        <div className="h-[30px] animate-pulse rounded-md bg-neutral-700 p-1"></div>
                        <div className="h-[30px] animate-pulse rounded-md bg-neutral-700 p-1"></div>
                        <div className="h-[30px] animate-pulse rounded-md bg-neutral-700 p-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
