# SLwire

**Live network monitor for Windows 10 / 11.**

SLwire is a lightweight, tray-first desktop app for seeing what your Windows PC is doing on the network: live upload and download speeds, per-app usage, active connections, Windows Firewall control, alerts, and local usage history.

Published by [NetPlus Software](https://github.com/Net-Plus-Software).

[**Download SLwire v1.1.1**](https://github.com/Net-Plus-Software/slwire/releases/latest) · [**Landing page**](https://net-plus-software.github.io/slwire/)

![SLwire dashboard](docs/assets/screenshot-overview.png)

## Download

| Build | File | Size |
| --- | --- | --- |
| Installer (recommended) | `SLwire-Setup-1.1.1.exe` | 89.4 MB |
| Portable | `SLwire-Portable-1.1.1.exe` | 89.2 MB |

Both builds require Windows 10/11 (64-bit) and administrator access.

### Installer SHA-256

```text
FA4EE724FD1487BFC22A14DF73FA332139C1B3AF8178CCF15042CF2A05C22E36
```

### Portable SHA-256

```text
1D9660B13499926A24BFBE95FD0A86D78A6D8C9E5522766F96EC2816FD581E31
```

## Highlights

- **Live traffic** — real-time speeds, a rolling graph, and 1/5/15-minute averages.
- **Website usage** — estimated per-site data usage, matched from the Windows DNS cache and reverse DNS, across live, minute, hour, day, month, and year ranges.
- **Per-app usage** — see which processes are using data. Per-app byte counters are TCP-only.
- **PDF reports** — export every range plus the data used by each website and application.
- **Connections** — TCP/UDP endpoints, ports, state, PID, and process name.
- **Firewall control** — block or allow apps with Windows Firewall rules.
- **Alerts** — speed spikes, daily limits, new apps, and firewall changes.
- **Local history** — daily usage saved under `%APPDATA%\SLwire`.
- **Tray-first** — close to tray, reopen from the tray, or quit from the tray menu.
- **Auto-start** — a Task Scheduler task starts SLwire silently at Windows sign-in with highest privileges. Manual launches still show UAC.

## Install

1. Download the installer from the [latest release](https://github.com/Net-Plus-Software/slwire/releases/latest).
2. Run `SLwire-Setup-1.1.1.exe`. If Windows SmartScreen appears, choose **More info → Run anyway**.
3. Approve the UAC prompt. SLwire opens in the system tray.
4. Auto-start is enabled by default. You can toggle it in **Settings**.

> This is an independent, unsigned build. SmartScreen may warn on first launch. Verify the SHA-256 checksum above if you want extra confidence.

## Notes

- Per-app byte counters are TCP-only. Apps that mostly use UDP/QUIC may show little or no app-level traffic; total traffic is unaffected.
- Per-connection statistics are measurable for IPv4 TCP on current Windows builds. IPv6 traffic counts toward totals but is not split per site or per app.
- Website attribution is an estimate: shared/CDN addresses, DNS-over-HTTPS lookups, and rotated CDN IPs can appear as a bare IP address.
- Runtime data is stored locally in `%APPDATA%\SLwire` (`config.json`, `alerts.json`, `apps.json`, `firewall-rules.json`, and `history\YYYY-MM-DD.json`).
- Automatic startup uses a scheduled task named `SLwire`, not a Run-key entry, so it does not show a UAC prompt at sign-in.
