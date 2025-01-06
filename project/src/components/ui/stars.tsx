import { cn } from '@/lib/utils';

export function Stars({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_70%)]',
        className
      )}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9InN0YXIiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IndoaXRlIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSJ0cmFuc3BhcmVudCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InRyYW5zcGFyZW50Ii8+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxIiBmaWxsPSJ1cmwoI3N0YXIpIi8+PC9zdmc+')] bg-repeat opacity-30" />
      <div className="absolute inset-0 animate-twinkle [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:50px_50px]" />
      <div className="absolute inset-0 animate-twinkle-delayed [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:80px_80px]" />
    </div>
  );
}