import * as React from "react";

export function isButtonOverride(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const htmlTarget = event.target as HTMLElement;
    return htmlTarget && htmlTarget.closest(".allow-click") != null;
}
