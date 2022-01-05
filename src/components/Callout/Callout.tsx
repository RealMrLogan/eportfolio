const Callout = ({ children }) => (
  <div className="flex gap-1.5">
    <div className="w-4 rounded-l-lg bg-carrot dark:bg-dodger" />
    <div className="px-6 w-full rounded-r-lg bg-charcoal text-platinum dark:bg-platinum dark:text-charcoal">{children}</div>
  </div>
)

export { Callout }
