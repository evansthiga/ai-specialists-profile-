export default function Loading() {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-64 bg-muted rounded"></div>
          <div className="h-4 w-48 bg-muted rounded"></div>
        </div>
      </div>
    </div>
  )
}

