<script setup lang="ts">
const noop = (): void => {};
const dateShortcuts = [{ label: "今天", value: "2026-11-19" }];
const disabledDate = (): boolean => false;
const formatProgress = (value: number): string => `${value}%`;
const filterCity = (item: { value: string }, query: string): boolean =>
  item.value.includes(query);
</script>

<template>
  <super-autocomplete
    :value="'a'"
    :items="['a']"
    :filter="filterCity"
    @super-autocomplete-input="noop"
    @super-autocomplete-change="noop"
    @super-autocomplete-clear="noop"
    @super-autocomplete-open-change="noop"
  />
  <super-avatar src="a.png" alt="头像" size="small" shape="circle" />
  <super-badge value="3" :max="9" dot status="danger">
    <span>消息</span>
  </super-badge>
  <super-breadcrumb :items="[{ label: '首页', href: '#' }]" />
  <super-button
    variant="primary"
    size="medium"
    shape="pill"
    loading-text="处理中"
  >
    按钮
  </super-button>
  <super-card
    variant="outlined"
    clickable
    @super-card-click="noop"
  >
    内容
  </super-card>
  <super-checkbox
    :checked="true"
    :indeterminate="false"
    @super-checkbox-change="noop"
  >
    复选
  </super-checkbox>
  <super-date-picker
    :value="'2026-11-19'"
    mode="date"
    :shortcuts="dateShortcuts"
    :disabled-date="disabledDate"
    @super-date-picker-change="noop"
    @super-date-picker-clear="noop"
    @super-date-picker-open-change="noop"
  />
  <super-dialog
    :open="false"
    title="标题"
    close-on-escape
    @super-dialog-before-close="noop"
    @super-dialog-close="noop"
    @super-dialog-confirm="noop"
    @super-dialog-cancel="noop"
  />
  <super-divider direction="horizontal" content-position="left">
    分割
  </super-divider>
  <super-drawer
    :open="false"
    title="抽屉"
    placement="right"
    @super-drawer-before-close="noop"
    @super-drawer-close="noop"
    @super-drawer-confirm="noop"
    @super-drawer-cancel="noop"
  />
  <super-dropdown
    :items="[{ key: 'edit', label: '编辑' }]"
    @super-dropdown-select="noop"
    @super-dropdown-open-change="noop"
  >
    <button>更多</button>
  </super-dropdown>
  <super-empty description="暂无数据" size="medium" />
  <super-form
    :schema="{ fields: [] }"
    :value="{}"
    @super-form-change="noop"
    @super-form-submit="noop"
    @super-form-invalid="noop"
    @super-form-reset="noop"
  />
  <super-input
    :value="'文本'"
    type="text"
    size="medium"
    validation="none"
    @super-input="noop"
    @super-change="noop"
    @super-clear="noop"
    @super-password-visibility="noop"
  />
  <super-menu
    :items="[{ key: 'home', label: '首页' }]"
    active="home"
    @super-menu-select="noop"
    @super-menu-open-change="noop"
  />
  <super-message
    :open="false"
    message="消息"
    type="info"
    :duration="0"
    @super-message-close="noop"
  />
  <super-notification
    :open="false"
    title="通知"
    message="内容"
    placement="top-right"
    :duration="0"
    @super-notification-close="noop"
  />
  <super-pagination
    :total="120"
    :page="1"
    :page-size="10"
    @super-pagination-change="noop"
  />
  <super-popconfirm
    title="确认"
    trigger="click"
    @super-popconfirm-confirm="noop"
    @super-popconfirm-cancel="noop"
    @super-popconfirm-open-change="noop"
  >
    <button>删除</button>
  </super-popconfirm>
  <super-popover content="内容" trigger="click" @super-popover-open-change="noop">
    <button>打开</button>
  </super-popover>
  <super-progress
    :value="50"
    :max="100"
    :format="formatProgress"
  />
  <super-radio :checked="true" name="group" value="one" @super-radio-change="noop">
    单选
  </super-radio>
  <super-rate :value="3" :max="5" @super-rate-change="noop" />
  <super-select
    :value="'a'"
    :multiple="false"
    open
    @super-select-change="noop"
    @super-select-clear="noop"
    @super-select-open-change="noop"
    @super-select-search="noop"
  >
    <option value="a">A</option>
  </super-select>
  <super-skeleton variant="text" :rows="2" animated />
  <super-slider :value="40" :min="0" :max="100" @super-slider-change="noop" />
  <super-space direction="horizontal" size="small">
    <span>一</span>
  </super-space>
  <super-steps
    :items="[{ title: '第一步' }]"
    :active="0"
    clickable
    @super-steps-change="noop"
  />
  <super-switch :checked="true" @super-switch-change="noop">
    开关
  </super-switch>
  <super-table
    :columns="[{ key: 'name', title: '名称' }]"
    :rows="[{ id: '1', name: 'A' }]"
    selectable
    @super-table-sort="noop"
    @super-table-select="noop"
  />
  <super-tabs
    :items="[{ key: 'a', label: 'A' }]"
    active="a"
    @super-tabs-change="noop"
    @super-tabs-close="noop"
  />
  <super-tag value="a" closable @super-tag-close="noop">标签</super-tag>
  <super-time-picker
    :value="'09:30'"
    :range="false"
    :shortcuts="[{ label: '上午', value: '09:00' }]"
    @super-time-picker-change="noop"
    @super-time-picker-clear="noop"
    @super-time-picker-open-change="noop"
  />
  <super-tooltip content="提示" @super-tooltip-open-change="noop">
    <button>悬停</button>
  </super-tooltip>
  <super-upload
    :file-list="[]"
    :max-count="3"
    @super-upload-change="noop"
    @super-upload-submit="noop"
    @super-upload-remove="noop"
    @super-upload-exceed="noop"
  />
</template>
