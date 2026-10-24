function DashboardHeader() {
  return (
    <header className="mb-[46px] flex items-center justify-between gap-6 max-sm:mb-[34px]">
      <a className="flex items-center gap-3 text-[1.05rem] font-extrabold tracking-[-0.04em] text-[#16243a]" href="#" aria-label="Wattwise home">
        <span className="grid size-[42px] place-items-center rounded-[14px] bg-gradient-to-br from-[#3979f6] to-[#6956e8] text-white shadow-[0_8px_20px_rgba(72,102,235,0.28)] [&_svg]:size-[21px]" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M13.2 2.8 5.5 13h5.3l-.5 8.2L18.5 11h-5.3l0-8.2Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round" />
          </svg>
        </span>
        Wattwise
      </a>
      <div className="flex items-center gap-2 text-[0.85rem] font-semibold text-[#697890] max-sm:text-[0.72rem]">
        <span className="size-2 rounded-full bg-[#21b77a] shadow-[0_0_0_4px_rgba(33,183,122,0.12)]" aria-hidden="true" />
        <span>Private on this device</span>
      </div>
    </header>
  )
}

export default DashboardHeader
