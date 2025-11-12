<script lang="ts">
import {
	FONT_DROID_SANS,
	FONT_HANALEI,
	FONT_HUNINN,
	FONT_SOURCE_HAN_SERIF,
	FONT_ZEN_MARU_GOTHIC,
} from "@constants/constants";
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import Icon from "@iconify/svelte";
import { getStoredFontMode, setFontMode } from "@utils/setting-utils";
import { siteConfig } from "@/config";
import type { FONT_MODE } from "@/types/config";

const seq: FONT_MODE[] = [
	FONT_ZEN_MARU_GOTHIC,
	FONT_HANALEI,
	FONT_SOURCE_HAN_SERIF,
	FONT_DROID_SANS,
	FONT_HUNINN,
];
let mode: FONT_MODE = $state(getStoredFontMode());

// 如果配置中不允许切换，则不显示组件
const allowSwitch = siteConfig.font.allowSwitch !== false;

function switchFontMode(newMode: FONT_MODE) {
	mode = newMode;
	setFontMode(newMode);
}

function toggleFontMode() {
	let i = 0;
	for (; i < seq.length; i++) {
		if (seq[i] === mode) {
			break;
		}
	}
	switchFontMode(seq[(i + 1) % seq.length]);
}

function showPanel() {
	const panel = document.querySelector("#font-mode-panel");
	panel?.classList.remove("float-panel-closed");
}

function hidePanel() {
	const panel = document.querySelector("#font-mode-panel");
	panel?.classList.add("float-panel-closed");
}

// 获取字体显示名称
function getFontName(fontMode: FONT_MODE): string {
	switch (fontMode) {
		case FONT_ZEN_MARU_GOTHIC:
			return i18n(I18nKey.fontZenMaruGothic);
		case FONT_HANALEI:
			return i18n(I18nKey.fontHanalei);
		case FONT_SOURCE_HAN_SERIF:
			return i18n(I18nKey.fontSourceHanSerif);
		case FONT_DROID_SANS:
			return i18n(I18nKey.fontDroidSans);
		case FONT_HUNINN:
			return i18n(I18nKey.fontHuninn);
		default:
			return "";
	}
}

// 获取字体图标
function getFontIcon(fontMode: FONT_MODE): string {
	switch (fontMode) {
		case FONT_ZEN_MARU_GOTHIC:
			return "material-symbols:font-download-outline";
		case FONT_HANALEI:
			return "material-symbols:style-outline";
		case FONT_SOURCE_HAN_SERIF:
			return "material-symbols:article-outline";
		case FONT_DROID_SANS:
			return "material-symbols:devices-outline";
		case FONT_HUNINN:
			return "material-symbols:circle-outline";
		default:
			return "material-symbols:font-download-outline";
	}
}
</script>

{#if allowSwitch}
<style>
.current-font-btn {
	background-color: var(--primary);
	color: white;
}
</style>

<!-- z-50 make the panel higher than other float panels -->
<div class="relative z-50" role="menu" tabindex="-1" onmouseleave={hidePanel}>
    <button aria-label="Font Mode" role="menuitem" class="relative btn-plain scale-animation rounded-lg h-11 w-11 active:scale-90" id="font-mode-switch" onclick={toggleFontMode} onmouseenter={showPanel}>
        <div class="absolute" class:opacity-0={mode !== FONT_ZEN_MARU_GOTHIC}>
            <Icon icon={getFontIcon(FONT_ZEN_MARU_GOTHIC)} class="text-[1.25rem]"></Icon>
        </div>
        <div class="absolute" class:opacity-0={mode !== FONT_HANALEI}>
            <Icon icon={getFontIcon(FONT_HANALEI)} class="text-[1.25rem]"></Icon>
        </div>
        <div class="absolute" class:opacity-0={mode !== FONT_SOURCE_HAN_SERIF}>
            <Icon icon={getFontIcon(FONT_SOURCE_HAN_SERIF)} class="text-[1.25rem]"></Icon>
        </div>
        <div class="absolute" class:opacity-0={mode !== FONT_DROID_SANS}>
            <Icon icon={getFontIcon(FONT_DROID_SANS)} class="text-[1.25rem]"></Icon>
        </div>
        <div class="absolute" class:opacity-0={mode !== FONT_HUNINN}>
            <Icon icon={getFontIcon(FONT_HUNINN)} class="text-[1.25rem]"></Icon>
        </div>
    </button>
    <div id="font-mode-panel" class="hidden lg:block absolute transition float-panel-closed top-11 -right-2 pt-5" >
        <div class="card-base float-panel p-2">
            <button class="flex transition whitespace-nowrap items-center !justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5"
                    class:current-font-btn={mode === FONT_ZEN_MARU_GOTHIC}
                    onclick={() => switchFontMode(FONT_ZEN_MARU_GOTHIC)}
            >
                <Icon icon={getFontIcon(FONT_ZEN_MARU_GOTHIC)} class="text-[1.25rem] mr-3"></Icon>
                {i18n(I18nKey.fontZenMaruGothic)}
            </button>
            <button class="flex transition whitespace-nowrap items-center !justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5"
                    class:current-font-btn={mode === FONT_HANALEI}
                    onclick={() => switchFontMode(FONT_HANALEI)}
            >
                <Icon icon={getFontIcon(FONT_HANALEI)} class="text-[1.25rem] mr-3"></Icon>
                {i18n(I18nKey.fontHanalei)}
            </button>
            <button class="flex transition whitespace-nowrap items-center !justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5"
                    class:current-font-btn={mode === FONT_SOURCE_HAN_SERIF}
                    onclick={() => switchFontMode(FONT_SOURCE_HAN_SERIF)}
            >
                <Icon icon={getFontIcon(FONT_SOURCE_HAN_SERIF)} class="text-[1.25rem] mr-3"></Icon>
                {i18n(I18nKey.fontSourceHanSerif)}
            </button>
            <button class="flex transition whitespace-nowrap items-center !justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5"
                    class:current-font-btn={mode === FONT_DROID_SANS}
                    onclick={() => switchFontMode(FONT_DROID_SANS)}
            >
                <Icon icon={getFontIcon(FONT_DROID_SANS)} class="text-[1.25rem] mr-3"></Icon>
                {i18n(I18nKey.fontDroidSans)}
            </button>
            <button class="flex transition whitespace-nowrap items-center !justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95"
                    class:current-font-btn={mode === FONT_HUNINN}
                    onclick={() => switchFontMode(FONT_HUNINN)}
            >
                <Icon icon={getFontIcon(FONT_HUNINN)} class="text-[1.25rem] mr-3"></Icon>
                {i18n(I18nKey.fontHuninn)}
            </button>
        </div>
    </div>
</div>
{/if}

